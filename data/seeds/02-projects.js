
exports.seed =async function(knex) {
 await knex("projects").insert([
   {project_name:"bar",project_description:null,project_completed:false},
   {project_name:"bar",project_description:"blablabalbal",project_completed:true},
   {project_name:"bar",project_description:"adela!!!",project_completed:false},
   {project_name:"bar",project_description:null,project_completed:true}
 ])
};
