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
// Policy Template
Policy Attributes:
  Name: "ABC Gold Health Policy"
  Issuer: "ABC Insurance Corporation"
  UIN: "ABC123DEF456"
  Type: "Medical"
  Category: "Group"
  URL: "https://www.abchealth.com/policy/abcGoldHealthPolicy.html"
  Version: "1.0.0"
  Approval Date: 2019-01-01
  Effective Date: 2019-02-01
  Expiration Date: 2024-12-31
  Sum Assured: One of the following:
  - Amt(1,00,000) if Var(Employee Designation) is "Staff" and Var(Enhancement Type) is "50%"
  - Amt(2,00,000) if Var(Employee Designation) is "Associate"
  - Amt(2,00,000) if Var(Employee Designation) is "Director"
  - Amt(50,000) default
  Copay %: 10

Coverage:
  Prc(CABG):
    Limit per policy period: Amt(1,00,000)
  Dgn(Heart diseases), Prc(Cancer Treatments):
    Limit per person: whichever is lower of 2% of Var(Sum Assured) and Amt(5,00,000)
  Prc(Cataract):
    Limit per claim: One of the following:
      - Amt(35,000) if all of the following are true:
        - Var(Employee Designation) is "Staff"
        - Var(Enhancement Type) is "50%"
      - Amt(40,000) if Var(Employee Designation) is "Asociate"
        and Var(Enhancement Type) is "100%"
      - Amt(50,000) if Var(Employee Designation) is "Director"
      - 5 % of Var(Sum Assured) default
    Included only if:
      number of months between Var(Policy Start Date) and Var(Hospitalization Date) is greater than 36
      and Var(Pre-existing Conditions) does not contain Dgn(Diabetes)

Exclusions:
  Dgn(Ebola)
  Svc(Room rent for attendants)
  Prc(Minimally invasive CABG):
    Excluded unless: Var(Employee Designation) is "Director"
`;
};

