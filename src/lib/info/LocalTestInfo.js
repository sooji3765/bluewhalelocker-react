
class LocalTestInfo {

  lockerList = [
    {
        locker_number : '0001',
        size : 'Large',
        state : 'using',
        score : '3.2',
        charge: 'chage',
        prices: '2000'
    },
    {
        locker_number : '0002',
        size : 'Small',
        state : 'empty',
        score : '3.2'
    },
    {
        locker_number : '0003',
        size : 'Large',
        state : 'using',
        score : '3.2'
    },
    {
        locker_number : '0004',
        size : 'Large',
        state : 'disable',
        score : '3.2'
    },
    {
        locker_number : '0005',
        size : 'Small',
        state : 'using',
        score : '3.2'
    },{
        locker_number : '0006',
        size : 'Medium',
        state : 'using',
        score : '4.0'
    },
    {
        locker_number : '0007',
        size : 'Large',
        state : 'using',
        score : '1.2',
    }
  ];

  testProfileList = [
    { profile_type: "user"  , profile_id: "user1"  , profile_pwd: "user1p"   , profile_name: "김철수", profile_email: "a1@a.com" },
    { profile_type: "user"  , profile_id: "user2"  , profile_pwd: "user2p"   , profile_name: "김철순", profile_email: "a2@a.com" },
    { profile_type: "keeper", profile_id: "keeper1", profile_pwd: "keeper1p" , profile_name: "홍길순", profile_email: "a3@a.com" },
    { profile_type: "keeper", profile_id: "keeper2", profile_pwd: "keeper2p" , profile_name: "홍길동", profile_email: "a4@a.com" },
  ];

}

let singletonInstance;

if (!singletonInstance) {
  singletonInstance = new LocalTestInfo();
}

export default singletonInstance;
