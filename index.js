
let recipe={name:"",description:"",ingredients:new Array(6).fill("<input type='text' name='ingredients'/>")}

function init() {
  //put any page initialization/handlebars initialization here
<<<<<<< HEAD
  Handlebars.registerHelper("displayIngredient",function(){
  return new Handlebars.SafeString("<li name='ingredients'>"+this.name+"</li>")
})
Handlebars.registerPartial("recipeDetailsPartial",document.getElementById("recipe-details-partial").innerHTML);
//
Handlebars.registerPartial("recipeFormPartial",document.getElementById("recipe-form-partials").innerHTML);

renderTemplate(document.getElementById("recipe-form-template").innerHTML,document.getElementById("main"),recipe);

}

function renderTemplate(template,root,content){
  root.innerHTML=Handlebars.compile(template)(content)
}

function createRecipe(){
  recipe={name:"",description:"",ingredients:new Array(6).fill("<input type='text' name='ingredients'/>")}
  const main=document.getElementById("main");
  renderTemplate(document.getElementById("recipe-form-template").innerHTML,main,recipe);

  let recipeTemplate=document.getElementById("recipe-template").innerHTML;
  let recipeTemplateFn=Handlebars.compile(recipeTemplate);
  main.innerHTML+=recipeTemplateFn(recipe);
}

function handleSubmit(){
  let name=document.getElementById("name").value;
  let description=document.getElementById("description").value;
  let ingredients=document.getElementsByName("ingredients").value;
  recipe={name,description,ingredients}
  //show recipe details
  const showRecipeTemplate=document.getElementById("recipe-details-partial").innerHTML;
  const main=document.getElementById('main');
  renderTemplate(showRecipeTemplate,root,recipe)
}

function displayEditForm(){
  const recipeFormTemplate=document.getElementById("recipe-form-template").innerHTML;
  const recipeFormTemplateFn=Handlebars.compile(recipeFormTemplate);
  const main=document.getElementById('main');

  main.innerHTML=recipeFormTemplateFn({recipe})
}

function updateRecipe(){
let recipeTemplate=document.getElementById("recipe-template").innerHTML;
const main=document.getElementById('main');
renderTemplate(recipeTemplate,main,recipe)
=======
  const formTemplate=document.getElementById("recipe-form").innerHTML;
  const formTemplateFunction=Handlebars.compile(formTemplate);
  const html=formTemplateFunction({ingredients:new Array(6).fill("<input type='text' name='ingredients' /></br>")});
  document.getElementsByTagName("main")[0].innerHTML+=html;

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {'name': name, 'description': description, 'ingredients': ingredients, 'submitAction': 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {'name': name, 'ingredients': ingredients, 'description': description}
  return(recipe)
}

function handlebarsSetup() {
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}


function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
>>>>>>> 4a8c85361d5cb7320e8bf2d6a2d3c7cdf50cf87a
}



document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
