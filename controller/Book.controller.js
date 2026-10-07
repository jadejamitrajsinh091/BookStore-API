import HttpError from "../middleware/httpError.js";
import Store from "../model/BookSchema.js";

const Create = async (req, res, next) => {
  try 
  {
    const body = req.body || {};
    const { title, author, ISBN, price } = body;

    let normalizedImages = [];

    if (req.files && req.files.length > 0) 
    {
      normalizedImages = req.files.map((file) => file.path);
    } 

    else if (body.image) 
    {
      normalizedImages = Array.isArray(body.image)
        ? body.image
        : [body.image];
    }

    if (!title || !author || !ISBN || !price || normalizedImages.length === 0) 
    {
      return next(new HttpError(400, "Please Fill All Field"));
    }

    const book = await Store.create({
      title,
      author,
      ISBN,
      price,
      image: normalizedImages,
    });

    res.status(201).json({ success: true, message: "Book Added", book });
  } 

  catch (error) 
  {
    return next(new HttpError(500, error.message || "Failed to create book"));
  }
};

const getAllBooks = async (req, res, next) => {
  try 
  {
    const books = await Store.find({});

    if (!books || books.length === 0) 
    {
      return next(new HttpError(404, "no books found"));
    }

    res.status(200).json({
      success: true,
      message: "all book data fetched successfully",
      total: books.length,
      books,
    });

  } 

  catch (error) 
  {
    return next(new HttpError(500, error.message || "Failed to fetch books"));
  }

};

const Update = async (req, res, next) => {
  try 
  {
    const { id } = req.params;

    const { title, author, ISBN, price } = req.body || {};

    const updatedBook = await Store.findByIdAndUpdate(
      id,
      {
        $set: {
          title,
          author,
          ISBN,
          price,
        },
      },
      {
        new: true,
        runValidators: true,
      }

    );

    if (!updatedBook) 
    {
      return next(new HttpError(404, "Book not found"));
    }

    res.status(200).json({
      success: true,
      message: "Book Updated Successfully",
      book: updatedBook,
    });

  } 
  catch (error) 
  {
    return next(
      new HttpError(500, error.message || "Failed to update book")
    );
  }
};

const Delete = async (req, res, next) => {
  try 
  {
    const { id } = req.params;

    const deletedBook = await Store.findByIdAndDelete(id);

    if (!deletedBook) 
    {
      return next(new HttpError(404, "Book not found"));
    }

    res.status(200).json({
      success: true,
      message: "Book Deleted Successfully",
      book: deletedBook,
    });
  } 
  catch (error) 
  {
    return next(
      new HttpError(500, error.message || "Failed to delete book")
    );
  }
};


export default { Create, getAllBooks, Update , Delete};