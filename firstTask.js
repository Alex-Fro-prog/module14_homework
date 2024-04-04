const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
let listNode = xmlDOM.querySelectorAll("student");

const result = {
    list: [...listNode].map(student => {
        const nameNode = student.querySelector('name');
        const firstNode = nameNode.querySelector('first').textContent;
        const secondNode = nameNode.querySelector('second').textContent;
        const langAttr = nameNode.getAttribute('lang');
        const age = Number(student.querySelector('age').textContent);
        const prof = student.querySelector('prof').textContent;
        
        return {
            name: `${firstNode} ${secondNode}`,
            age,
            prof,
            lang: langAttr
        };
    })
};

console.log(result);
