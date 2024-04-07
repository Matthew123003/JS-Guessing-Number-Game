while (true) {
  let cmd = prompt("Enter a command", "");
  if (cmd == "exit") break;
  execute(cmd);
} console.log("Exiting")