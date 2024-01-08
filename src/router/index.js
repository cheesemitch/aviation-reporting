import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/about.vue';
import ApplicationShell from '../components/TheApplicationShell.vue';

const base = process.env.NODE_ENV === 'production' ? '/aviation-reporting/' : '/';

const routes = [
  {path: '/', redirect: '/app/dashboard'},
  {path: '/app', name: 'application', component: ApplicationShell ,
    children: [
      {path: 'dashboard', name: 'dashboard', component: () => import('/src/views/dashboard.vue')},
      {path: 'organisation/companyprofile', name: 'companyprofile', component: () => import('/src/views/companyprofile.vue'),
        //children: [
          //{path: '', name: 'companyprofileStrategicFocus', component: () => import('/src/components/companyprofileStrategicFocus.vue')},
          //{path: 'riskprofile', name: 'companyprofileRiskProfile', component: () => import('/src/components/CompanyprofileRiskProfile.vue')},
          //{path: 'edit', name: 'companyprofileEdit', component: () => import('/src/components/companyprofileEdit.vue')}
        //],
      },
      {path: 'organisation/teams', name: 'teams', component: () => import('/src/views/teams.vue'), props: true,
        children: [
          {path: '', name: 'teams.overview', component: () => import('/src/views/teamsOverview.vue'), props: true },
          {path: ':id/:slug', name: 'team.details', component: () => import('/src/views/teamDetails.vue'), props: true }
        ],
      },
      {path: 'strategic-planning/mission-statement', name: 'mission.statement', component: () => import('/src/views/missionStatement.vue'), props: true},
      {path: 'strategic-planning/strategy-development/swot', name: 'swot', component: () => import('/src/views/swot.vue')},
      
      {path: 'strategic-planning/goalsetting/okr/company/objectives', name: 'company.objectives', component: () => import('/src/views/companyObjectives.vue'), props: true},
      {path: 'strategic-planning/goalsetting/okr/company/objectives/:id/:slug', name: 'company.objectives.detail', component: () => import('/src/views/companyObjectiveDetails.vue'), props: true},

      
      {path: 'strategic-planning/goalsetting/okr/teams', name: 'team.objectives', component: () => import('/src/views/teamOKR.vue'), props: true,
        children: [
          {path: '', name: 'team.objectives.teams', component: () => import('/src/views/teamOKRteams.vue'), props: true },
        ], 
      },
      
      {path: 'strategic-planning/goalsetting/okr/my-objectives', name: 'my.objectives', component: () => import('/src/views/myObjectives.vue'), props: true,
        children: [
          {path: '', name: 'my.objectives.list', component: () => import('/src/views/myObjectivesList.vue'), props: true },
          {path: ':id/:slug', name: 'my.objective.details', component: () => import('/src/views/objectiveDetails.vue'), props: true },
          {path: ':objectiveId/:objectiveSlug/keyresult/:keyresultId/:keyresultSlug', name: 'keyresult.details', component: () => import('/src/views/keyresult.vue'), props: true }
        ], 
      },
      {path: 'risk-management/riskriskprofile', name: 'riskprofile', component: () => import('/src/views/riskprofile.vue')},
      {path: 'risk-management/opportunities', name: 'opportunities', component: () => import('/src/views/opportunities.vue')},
      {path: 'risk-management/risks', name: 'risks', component: () => import('/src/views/risks.vue')},
      {path: 'risk-management/measures', name: 'measures', component: () => import('/src/views/measures.vue')},
      {path: 'risk-management/indicators', name: 'indicators', component: () => import('/src/views/indicators.vue')},
      {path: 'risk-management/reports', name: 'reports', component: () => import('/src/views/reports.vue')},
      {path: 'risk-management/archive', name: 'archive', component: () => import('/src/views/archive.vue')},
      {path: 'risk-management/support', name: 'support', component: () => import('/src/views/support.vue')},
      {path: 'risk-management/version', name: 'version', component: () => import('/src/views/version.vue')}
    ],
  }, 
]

const router = createRouter({
  history: createWebHistory(base),
  routes
});

export default router;