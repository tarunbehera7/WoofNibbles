// ----Validation for Login----
if (activeTab === "login") {
    if (!loginEmail.includes("@") || !loginEmail.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }
    // if (loginPassword.length < 8) {
    //   setError("Password must be at least 8 characters long");
    //   return;
    // }
  }
  // Validation for Signup
  else {
    if (!signupFirstName.match(/^[A-Za-z]+$/) || signupFirstName.length < 2) {
      setError("First name must contain only letters and be at least 2 characters long");
      return;
    }
    if (!signupLastName.match(/^[A-Za-z]+$/) || signupLastName.length < 2) {
      setError("Last name must contain only letters and be at least 2 characters long");
      return;
    }
    if (!signupEmail.includes("@") || !signupEmail.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }
    if (signupPassword.length < 8 || !/\d/.test(signupPassword)) {
      setError("Password must be at least 8 characters long and contain at least one number");
      return;
    }
  }