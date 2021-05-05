// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
    res.statusCode = 200
    res.json([
        {
            "show": {
                "id": 1,
                "name": "Avatar",
                "image": "https://randomuser.me/api/portraits/thumb/men/21.jpg",
                "type": 'Action',
            }
        },
        {
            "show": {
                "id": 2,
                "name": "Tom and Jery",
                "image": "https://randomuser.me/api/portraits/thumb/men/21.jpg",
                "type": 'Cartoon',
            }
        },   
        {
            "show": {
                "id": 3,
                "name": "IT",
                "image": "https://randomuser.me/api/portraits/thumb/men/21.jpg",
                "type": 'Horor',
            }
        },   
        {
            "show": {
                "id": 4,
                "name": "Wibuuuu",
                "image": "https://randomuser.me/api/portraits/thumb/men/21.jpg",
                "type": 'Anime',
            }
        },       
    ])
}