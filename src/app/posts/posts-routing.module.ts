import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostsComponent } from "./posts.component";
import { DetailResolver } from "./shared/detail.resolver";

const routes: Routes = [
    {
        path: '',
        component: PostsComponent
    },
    {
        path: ':id',
        component: PostDetailComponent, resolve: { detail: DetailResolver }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }