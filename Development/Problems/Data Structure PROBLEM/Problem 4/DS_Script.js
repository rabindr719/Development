document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){

    const text=document.querySelector('textarea').value;

    const rows=text.split('\n');
console.log(rows);

for(const rows of rows.entries())
{
  const [first, second] =  rows.toLowerCase().trim().split('_');
  const output=`${first} ${second.replace(
    second[0], 
    second[0].toUpperCase())}`;
  //console.log(output.padEnd(20,' '));
  console.log(`${output.padEnd(20)} ${'Right'.repeat(i+1)}`);

}
});
