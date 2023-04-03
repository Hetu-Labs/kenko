import { createServer } from 'http';
import antlr4 from 'antlr4';
import HIPMLLexer from './HIPMLLexer.js';
import HIPMLParser from './HIPMLParser.js';
import HtmlHIPMLListener from './HtmlHIPMLListener.js';

const { CommonTokenStream, InputStream } = antlr4;
const PORT = 1337;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.write('<html><head><meta charset="UTF-8"/></head><body>');

   // get defined input
   var input = getInput();
   var chars = new InputStream(input, true);

   var lexer = new HIPMLLexer(chars);
   var tokens  = new CommonTokenStream(lexer);
   var parser = new HIPMLParser(tokens);
   parser.buildParseTrees = true;
   var tree = parser.policy();

  // evaluate the parse tree
   var htmlHIPML = new HtmlHIPMLListener(res);
   antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlHIPML, tree);

   res.write('</body></html>');
   res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const getInput  = () => {
return `
Policy Attributes:
  Sum Assured: Amt(10,00,000)
  Copay %: 5
Coverage:
  Prc(Angioplasty)
  Prc(CABG)
  Prc(Cataract)
  Dgn(Heart arrhythmia)
  Dgn(Diabetes mellitus)
  Svc(Room rent for attendants)
Exclusions:
  Prc(Cosmetic Surgeries)
  Prc(Dental treatments)
  Dgn(Ebola)
  Svc(Laundry charges)
`;
};

