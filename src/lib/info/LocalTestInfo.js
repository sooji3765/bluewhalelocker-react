
class LocalTestInfo {

  constructor(props) {
    console.log("constructor LocalTestInfo");
  }

}

let singletonInstance;

if (!singletonInstance) {
  singletonInstance = new LocalTestInfo();
}

export default singletonInstance;
