
exports.seed =async function(knex) {
  await knex("resources").insert([
    {resource_name:"foo",resource_description:null},
    {resource_name:"boo",resource_description:null},
    {resource_name:"fooboo",resource_description:null}
  ])
};
