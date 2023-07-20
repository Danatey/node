const { program } = require("commander");

// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
 switch (action) {
  case "read":
   const allBooks = await books.getAll();
   return console.log(allBooks);
  case "getById":
   const book = await books.getById(id);
   return console.log(book);
  case "add":
   const newBook = await books.add({ title, author });
   return console.log(newBook);
  case "updateById":
   const updatedBook = await books.updateById(id, { title, author });
   return console.log(updatedBook);
  case "deleteById":
   const deletedBook = await books.deleteById(id);
   return console.log(deletedBook);
  default:
   console.log("Unknoun action");
 }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: 1 });
// invokeAction({ action: "add", title: "Worm", author: "Unknown" });
// invokeAction({
//  action: "updateById",
//  id: "2IdJEfH75THBAbS0BpCXg",
//  title: "Worm",
//  author: "I don't know",
// });
// invokeAction({
//  action: "deleteById",
//  id: "2IdJEfH75THBAbS0BpCXg",
// });

// const index = process.argv.indexOf("--action");
// if (index !== -1) {
//  const action = process.argv[index + 1];
//  invokeAction({ action });
// }

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);

program
 .option("-a, --action, <type>")
 .option("-i, --id, <type>")
 .option("-t, --title, <type>")
 .option("-au, --author, <type>");

program.parse();

const opts = program.opts();
invokeAction(opts);
