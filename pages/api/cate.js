// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  res.statusCode = 200
  res.json({
    "results": {
      "categories": ['Trinyti 50th', 'Horor', 'Action','Anime'],
      data: {
        "category": 'Trinyti 50th',
        "list": {
          "1": {
            name: 'https://randomuser.me/api/portraits/thumb/men/54.jpg',
            category: 'https://randomuser.me/api/portraits/thumb/men/54.jpg',
            
          }
        }
      }
    }
  })
}