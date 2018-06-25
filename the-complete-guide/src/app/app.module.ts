
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { RecipesComponent } from './Shopping-course-project/recipes/recipes.component';
import { RecipeListComponent } from './Shopping-course-project/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Shopping-course-project/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Shopping-course-project/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './Shopping-course-project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Shopping-course-project/shopping-list/shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './Shopping-course-project/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
