//Endpoints - since we use GraphQL, there is only one endpoint
export const ROOT           =      'http://test-cms.diwanee.net';
export const GQL            =      `${ROOT}/graphql`;

//Object that contains all queries (strings)
export const Queries = {
    test_node:          '/node?query=%7B%0A%20%20nodes(node_type%3A%20"Job")%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20elements%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20type%0A%20%20%20%20%20%20data%0A%20%20%20%20%7D%0A%20%20%20%20skills%3A%20tags(taxonomy%3A"Skills")%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A'
};
