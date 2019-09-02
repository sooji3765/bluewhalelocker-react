pragma solidity ^0.4.24;

contract Locker {
    struct Inbox {
        uint id;
        bytes32 name;
        string message;
        bool exists;
    }
    mapping (uint => Inbox) public inboxInfo;

    address public owner;
    string public message;

    event LogSetMessage(
        uint _id,
        bytes32 _name,
        string _message
    );
    
    constructor() public {
        owner = msg.sender;
    }

    function getMessage(uint _id) public view returns(uint, bytes32, string, bool) {
        Inbox memory inbox = inboxInfo[_id];
        return (inbox.id, inbox.name, inbox.message, inbox.exists);
    }

    function setMessage(uint _id, bytes32 _name, string _message) public {
        require(_id >=0);
        require(!inboxInfo[_id].exists);
        
        inboxInfo[_id] = Inbox(_id, _name, _message, true);

        message = _message;
        emit LogSetMessage(_id, _name, message);
    }

    /////////////////////////////////////////
    // for test set,get
    string private hello = "";

    function setHello(string memory value) public {
        hello = value;
    }

    function getHello() public view returns (string memory) {
        return hello;
    }
}