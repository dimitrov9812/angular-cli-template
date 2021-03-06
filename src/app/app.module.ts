import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesService } from './movies.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { BootstrapExampleComponent } from './bootstrap-example/bootstrap-example.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomPipeExampleComponent } from './custom-pipe-example/custom-pipe-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    SummaryPipe,
    BootstrapExampleComponent,
    TwoWayBindingComponent,
    PipeExampleComponent,
    CustomPipeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
