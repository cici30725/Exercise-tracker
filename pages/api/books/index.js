import { getAllBooks, createBook } from "../../../lib/queryLib"

export default async function handler(req, res) {
    const { body, method } = req
  
    switch (method) {
      case 'GET':
        // Get data from your database
        const books = await getAllBooks();
        res.status(200).json(books);
        break
      case 'POST':
        // Update or create data in your database
        const book = await createBook(body.bookName, body.author);
        if(book)
            res.status(200).json(book);
        else
            res.status(404).json({error: 'insert failed'});
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}