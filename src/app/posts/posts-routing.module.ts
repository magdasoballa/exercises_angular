import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostsComponent } from "./posts.component";

const routes: Routes = [
{path: '',
component: PostsComponent
},
{path: ':id',
component: PostDetailComponent
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule {}