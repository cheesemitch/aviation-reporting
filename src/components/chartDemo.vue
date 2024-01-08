<template>
  <div class="map-container">
    <svg ref="svg"></svg>
    <div ref="tooltip" class="hidden absolute text-sm bg-white p-2 border border-gray-300 rounded shadow"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { onMounted, ref } from 'vue';
import worldMap from '../assets/world-110m.json';

export default {
  setup() {
    const svg = ref(null);
    const tooltip = ref(null);

    onMounted(() => {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          drawMap(width, height);
        }
      });

      resizeObserver.observe(svg.value);

      function getLineThickness(passengers) {
        // Using thresholds
        if (passengers < 10000) return 1.5;
        if (passengers < 20000) return 2;
        if (passengers < 50000) return 5;
        if (passengers < 100000) return 8;
        if (passengers < 150000) return 10;
        if (passengers < 180000) return 12;
        if (passengers < 250000) return 14;
        return 15;
      }

      function drawMap(width, height) {
        d3.select(svg.value).selectAll("*").remove();

        const projection = d3.geoMercator()
                             .center([15, 50]) 
                             .scale(Math.min(width, height) / 2) 
                             .translate([width / 2, height / 2]);

        const path = d3.geoPath().projection(projection);

        const svgElement = d3.select(svg.value)
                             .attr("viewBox", `0 0 ${width} ${height}`)
                             .attr("width", "100%")
                             .attr("height", "100%");

        const g = svgElement.append("g");

        const zoom = d3.zoom()
                       .scaleExtent([1, 8])
                       .on('zoom', (event) => {
                         g.attr('transform', event.transform);
                         
                         g.selectAll("line")
                         .attr('stroke-width', d => getLineThickness(d.passengers) / event.transform.k);
                         
                         g.selectAll("circle")
                           .attr('r', d => d.key === 'Bremen' ? 7 / event.transform.k : 5 / event.transform.k);
                         g.selectAll(".airport-label")
                           .attr("x", d => projection([d.coords[0], d.coords[1]])[0] + 10 / event.transform.k)
                           .attr("y", d => projection([d.coords[0], d.coords[1]])[1] + 4 / event.transform.k)
                           .style("font-size", 12 / event.transform.k + "px");
                         g.selectAll(".countries path")
                           .attr("stroke-width", 0.5 / event.transform.k);
                       });

        svgElement.call(zoom);

          // Directly use the imported JSON data
          const world = worldMap;
          const countries = topojson.feature(world, world.objects.countries).features;

          g.selectAll("path")
          .data(countries)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("fill", "#e7e5e4"); 

          g.append("g")
          .attr("class", "countries")
          .selectAll("path")
          .data(countries)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("fill", "none")
          .attr("stroke", "#a8a29e") 
          .attr("stroke-width", 0.5);

          drawAirportsAndRoutes(g, projection);
        }
      

      function drawAirportsAndRoutes(g, projection) {
        // Airports data with approximate coordinates
        const airports = {
          'FRA': { coords: [8.6821, 50.1109], key: 'Frankfurt' },
          'MUC': { coords: [11.5810, 48.1351], key: 'Munich' },
          'STN': { coords: [-0.1276, 51.5074], key: 'London' },
          'BRE': { coords: [8.8017, 53.0793], key: 'Bremen' },
          'IST': { coords: [28.9784, 41.0082], key: 'Istanbul' },
          'PMI': { coords: [2.7343, 39.6117], key: 'Mallorca' },
          'AYT': { coords: [30.8005, 36.8998], key: 'Antalya' },
          'STN': { coords: [0.1936, 51.8850], key: 'London-STN' },
          'AMS': { coords: [4.7299, 52.3676], key: 'Amsterdam' },
          'STR': { coords: [9.1829, 48.7771], key: 'Stuttgart' },
          'ALC': { coords: [-0.5582, 38.2822], key: 'Alicante' },
          'SKP': { coords: [21.6250, 41.9611], key: 'Skopje' },
          'VNO': { coords: [25.2798, 54.6350], key: 'Vilnius' },
          'ADB': { coords: [27.1625, 38.2924], key: 'Izmir' },
          'HER': { coords: [25.1749, 35.3375], key: 'Heraklion' },
          'AGP': { coords: [-4.4896, 36.6749], key: 'Malaga' },
          'OPO': { coords: [-8.6709, 41.2370], key: 'Porto' },
          'FUE': { coords: [-13.8583, 28.4517], key: 'Fuerteventura' },
          'HRG': { coords: [33.7928, 27.1735], key: 'Hurghada' },
          'LPA': { coords: [-15.3853, 27.9258], key: 'Gran Canaria' },
          'PRN': { coords: [21.166191, 42.667542], key: 'Pristina' },
          'BEY': { coords: [35.4906, 33.8209], key: 'Beirut' },
          'TFS': { coords: [-16.5726, 28.2916], key: 'Teneriffa' },
          'RHO': { coords: [28.0864, 36.3932], key: 'Rhodos' },
          'KGS': { coords: [27.0937, 36.7937], key: 'Kos' },
          'ZAD': { coords: [15.3560, 44.1084], key: 'Zadar' },
          'VIE': { coords: [16.5622, 48.1155], key: 'Wien' },
          'CHQ': { coords: [24.1403, 35.5314], key: 'Chania' },
          'ZRH': { coords: [8.5617, 47.4502], key: 'Zuerich' },
          'ACE': { coords: [-13.6032, 28.9407], key: 'Lanzarote' },
          'SKG': { coords: [22.9707, 40.5200], key: 'Thessaloniki' },
          'MIR': { coords: [10.754722, 35.758056], key: 'Monastir' },
          // Add any other missing airports here
        };


        // Routes data
        const routes = [
          { from: 'BRE', to: 'MUC', flights: 3283, passengers: 328686 },
          { from: 'BRE', to: 'FRA', flights: 2990, passengers: 266331 },
          { from: 'BRE', to: 'PMI', flights: 1303, passengers: 192686 },
          { from: 'BRE', to: 'AYT', flights: 1157, passengers: 175971 },
          { from: 'BRE', to: 'STN', flights: 909, passengers: 149628 },
          { from: 'BRE', to: 'AMS', flights: 2035, passengers: 128134 },
          { from: 'BRE', to: 'IST', flights: 941, passengers: 118245 },
          { from: 'BRE', to: 'STR', flights: 566, passengers: 40506 },
          { from: 'BRE', to: 'ALC', flights: 226, passengers: 38823 },
          { from: 'BRE', to: 'SKP', flights: 201, passengers: 37873 },
          { from: 'BRE', to: 'VNO', flights: 211, passengers: 35463 },
          { from: 'BRE', to: 'ADB', flights: 216, passengers: 31274 },
          { from: 'BRE', to: 'HER', flights: 208, passengers: 28642 },
          { from: 'BRE', to: 'AGP', flights: 170, passengers: 26898 },
          { from: 'BRE', to: 'OPO', flights: 132, passengers: 22894 },
          { from: 'BRE', to: 'FUE', flights: 133, passengers: 19290 },
          { from: 'BRE', to: 'HRG', flights: 126, passengers: 17963 },
          { from: 'BRE', to: 'LPA', flights: 127, passengers: 17655 },
          { from: 'BRE', to: 'PRN', flights: 135, passengers: 15706 },
          { from: 'BRE', to: 'BEY', flights: 110, passengers: 15134 },
          { from: 'BRE', to: 'TFS', flights: 80, passengers: 11652 },
          { from: 'BRE', to: 'RHO', flights: 92, passengers: 10530 },
          { from: 'BRE', to: 'KGS', flights: 91, passengers: 10497 },
          { from: 'BRE', to: 'ZAD', flights: 61, passengers: 8282 },
          { from: 'BRE', to: 'VIE', flights: 86, passengers: 7719 },
          { from: 'BRE', to: 'CHQ', flights: 38, passengers: 5471 },
          { from: 'BRE', to: 'ZRH', flights: 162, passengers: 5085 },
          { from: 'BRE', to: 'ACE', flights: 31, passengers: 4478 },
          { from: 'BRE', to: 'SKG', flights: 20, passengers: 2208 },
          { from: 'BRE', to: 'MIR', flights: 16, passengers: 1937 },
          // Add any other missing routes here
        ];


        // Draw routes
        routes.forEach(route => {
          const from = airports['BRE'].coords;
          const to = airports[route.to].coords;
          
          // Define line thickness based on passenger count
          let lineThickness = getLineThickness(route.passengers);

          g.append("line")
            .datum(route)
            .attr("x1", projection(from)[0])
            .attr("y1", projection(from)[1])
            .attr("x2", projection(to)[0])
            .attr("y2", projection(to)[1])
            .attr("stroke", "#7dd3fc")
            .attr("stroke-width", lineThickness)
            .on("mouseover", (event) => {
              d3.select(tooltip.value)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY + 10) + "px")
                .classed("hidden", false)
                .text(`${route.to}: ${route.flights} flights, ${route.passengers} passengers`);
            })
            .on("mouseout", () => {
              d3.select(tooltip.value).classed("hidden", true);
            });
        });

        // Draw airports
        Object.keys(airports).forEach(key => {
          const airport = airports[key];
          const coords = projection(airport.coords);
          const fillColor = key === 'BRE' ? 'red' : 'black';
          const radius = key === 'BRE' ? 7 : 5;

          g.append("circle")
            .datum(airport)
            .attr("cx", coords[0])
            .attr("cy", coords[1])
            .attr("r", radius)
            .attr("fill", fillColor);

          g.append("text")
            .datum(airport)
            .attr("class", "airport-label")
            .attr("x", coords[0] + 10)
            .attr("y", coords[1] + 4)
            .text(key)
            .attr("text-anchor", "start")
            .attr("font-size", "12px")
            .attr("fill", "black");
        });
      }
    });

    return { svg, tooltip };
  }
}
</script>

<style>
.map-container {
  width: 100%;
  height: 100%;
}

.airport-label {
  text-shadow: 1px 1px 2px white, -1px -1px 2px white, 1px -1px 2px white, -1px 1px 2px white;
  font-weight: bold;
}
</style>
