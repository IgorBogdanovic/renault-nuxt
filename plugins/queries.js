//Endpoints - since we use GraphQL, there is only one endpoint
export const ROOT           =      'http://test-cms.diwanee.net';
export const GQL            =      `${ROOT}/graphql`;

//Object that contains all queries (strings)
export const Queries = {
    nav:          '/tag?query=%7B%0A%20%20navigation%3A%20tags(type%3A%20%22Navigation%22%2C%20first_level%3A%20true%2C%20sort_by%3A%20%22id%22%2C%20sort_order%3A%20%22asc%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20navigation_data%3A%20nodes%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20additional_fields%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20TypeNavigationItem%20%7B%0A%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20children%20%7B%0A%20%20%20%20%20%20name%20%20%20%20%20%20%0A%20%20%20%20%20%20navigation_data%3A%20nodes%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20additional_fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%20on%20TypeNavigationItem%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A',

    allTagsNames:
    '/tag?query=tag&query=%23%20Welcome%20to%20GraphiQL%0A%23%0A%23%20GraphiQL%20is%20an%20in-browser%20IDE%20for%20writing%2C%20validating%2C%20and%0A%23%20testing%20GraphQL%20queries.%0A%23%0A%23%20Type%20queries%20into%20this%20side%20of%20the%20screen%2C%20and%20you%20will%0A%23%20see%20intelligent%20typeaheads%20aware%20of%20the%20current%20GraphQL%20type%20schema%20and%0A%23%20live%20syntax%20and%20validation%20errors%20highlighted%20within%20the%20text.%0A%23%0A%23%20To%20bring%20up%20the%20auto-complete%20at%20any%20point%2C%20just%20press%20Ctrl-Space.%0A%23%0A%23%20Press%20the%20run%20button%20above%2C%20or%20Cmd-Enter%20to%20execute%20the%20query%2C%20and%20the%20result%0A%23%20will%20appear%20in%20the%20pane%20to%20the%20right.%0A%0A%7B%0A%20%20tags(type%3A%20"Category"%2C%20sort_by%3A%20"name"%2C%20sort_order%3A"asc")%20%7B%0A%09id%0A%09name%20%20%20%20%0A%20%20%7D%0A%7D%0A',
};
