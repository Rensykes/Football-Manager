import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { RoutingModule} from 'src/app/routing/routing.module'
import { MatchListComponent } from "src/app/match-list/match-list.component";
import { TeamDetailsComponent } from 'src/app/team-details/team-details.component'


const routes: Routes = [{
  path: "matches",
  component: MatchListComponent
},
{
  path: "",
  redirectTo: "/matches",
  pathMatch: "full"
},
{
  path: "team/:id",
  component: TeamDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
