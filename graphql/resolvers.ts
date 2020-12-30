
const andong = {
    name: "donghyun",
    age: 21
}


const resolvers = {
    Query: {
        person: () => andong
    }
}

export default resolvers;