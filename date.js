export function cDay (){
    const day = new Intl.DateTimeFormat("en-Us", {
        day: "numeric",
        year: `numeric`,
        month: `long`,
      }).format(new Date)
      
      console.log(day);
      return day
    
}

