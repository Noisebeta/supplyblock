actor {
  let companyName = "SupplyBlock";
  let tagline = "AI + Blockchain for transparent, efficient supply chains";

  public query func getSiteInfo() : async {
    companyName : Text;
    tagline : Text;
  } {
    {
      companyName;
      tagline;
    };
  };

  public query func getGreeting() : async Text {
    "Welcome to " # companyName # " - " # tagline;
  };
};
