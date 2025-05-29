export const renderErrorMessage = (error: any) => {
    switch (error?.response?.data?.error?.message) {
      case "Email or Username are already taken":
        return "Email or Username are already taken*";
      case "Invalid identifier or password":
        return "Incorrect username or password*";
      default:
        return "An error occurred. Please try again*";
    }
  };