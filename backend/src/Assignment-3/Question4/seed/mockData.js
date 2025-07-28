function generateMockUsers(count=10)
{
    const users=[];
    for(let i=0;i<count;i++)
    {
        users.push({
            id:24,
            name:'parth',
            email:'parthyadav944@gmail.com',
            phone:9910487074

        });
    }
    console.log(users);
    return users;

}
module.exports =generateMockUsers;