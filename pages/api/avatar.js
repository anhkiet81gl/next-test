// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
    res.statusCode = 200
    res.json({
        "id": 1,
        "name": "Avatar",
        "image": "https://randomuser.me/api/portraits/thumb/men/21.jpg",
        "type": 'Action',
    },)
}