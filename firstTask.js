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

result = {
    list: []
}

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
let listNode = xmlDOM.querySelectorAll("student");

let list = [];
listNode.forEach(student => {
    const nameNode = student.querySelector('name');
    const firstNode = nameNode.querySelector('first');
    const secondNode = nameNode.querySelector('second');
    const langAttr = nameNode.getAttribute('lang');
    const ageNode = student.querySelector('age');
    const profNode = student.querySelector('prof')
    
    result.list.push({
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr
    })
})

console.log(result);