fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json").then((data) =>{

return data.json();


}).then((objectData)=>{
    console.log(objectData[0].first_name);

    let tableData="";

    objectData.map((values)=>{

        tableData+=`<tr>
        <td>${values.first_name}</td>
        <td>${values.last_name}</td>
        <td>${values.gender}</td>
        <td>${values.img_src}</td>
      </tr>
      `;


    })
    document.getElementById("table_body").innerHTML=tableData;

})//


function sortData(type) {
    const sortedData = [...filteredStudents];
    switch (type) {
        case 'AZ':
            sortedData.sort((a, b) =>
                (a.first_name + ' ' + a.last_name).localeCompare(b.first_name + ' ' + b.last_name)
            );
            break;
        case 'ZA':
            sortedData.sort((a, b) =>
                (b.first_name + ' ' + b.last_name).localeCompare(a.first_name + ' ' + a.last_name)
            );
            break;
        case 'marks':
            sortedData.sort((a, b) => a.marks - b.marks);
            break;
        case 'passing':
            renderTable(students.filter(student => student.passing));
            return;
        case 'class':
            sortedData.sort((a, b) => a.class - b.class);
            break;
        case 'gender':
            const males = sortedData.filter(student => student.gender === 'male');
            const females = sortedData.filter(student => student.gender === 'female');
            renderGenderTables(females, males);
            return;
        default:
            break;
    }
    renderTable(sortedData);
}////
