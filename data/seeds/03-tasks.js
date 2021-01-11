
exports.seed =async function(knex) {
 await knex("tasks").insert([
   {task_description:"baz",task_notes:null,task_completed:false,project_id:1},
   {task_description:"bz",task_notes:null,task_completed:false,project_id:1},
   {task_description:"ba",task_notes:null,task_completed:false,project_id:1},
   {task_description:"bazs",task_notes:null,task_completed:false,project_id:2},
   {task_description:"bazdz",task_notes:null,task_completed:false,project_id:4},
   {task_description:"bazzzz",task_notes:null,task_completed:false,project_id:3}
 ])
};
