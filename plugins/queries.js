//Endpoints - since we use GraphQL, there is only one endpoint
export const ROOT           =      'http://test-cms.diwanee.net';
export const GQL            =      `${ROOT}/graphql`;

//Object that contains all queries (strings)
export const Queries = {
    nav:          '/tag?query=%7B%0A%20%20navigation%3A%20tags(type%3A%20%22Navigation%22%2C%20first_level%3A%20true%2C%20sort_by%3A%20%22id%22%2C%20sort_order%3A%20%22asc%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20navigation_data%3A%20nodes%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20additional_fields%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20TypeNavigationItem%20%7B%0A%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20children%20%7B%0A%20%20%20%20%20%20name%20%20%20%20%20%20%0A%20%20%20%20%20%20navigation_data%3A%20nodes%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20additional_fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%20on%20TypeNavigationItem%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A'
};
