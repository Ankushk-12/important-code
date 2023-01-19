var user = "admin";

switch (user) {
    case "admin":
        console.log("You have full access");
        break;
    case "subadmin":
        console.log("You can create and Delete the courses");
        break;
    case "testprep":
        console.log("You can create and Delete the Test");
        break;
    case "user":
        console.log("you can consume the content");
        break;

    default:
        console.log("Trail user ");
        break;
}
switch (user) {
    case "admin":
        console.log("You have full access");
      //  break;
    case "subadmin":
        console.log("You can create and Delete the courses");
      //  break;
    case "testprep":
        console.log("You can create and Delete the Test");
      //  break;
    case "user":
        console.log("you can consume the content");
      //  break;

    default:
        console.log("Trail user ");
        break;
        // the other statements are called falsy true if we don't use the break statement
}