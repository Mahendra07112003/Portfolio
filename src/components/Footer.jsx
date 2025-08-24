// import { ArrowUp } from "lucide-react";

// export const Footer = () => {
//   return (
//     <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
//       {" "}
//       <p className="text-sm text-muted-foreground">
//         {" "}
//         &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
//       </p>
//       <a
//         href="#hero"
//         className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//       >
//         <ArrowUp size={20} />
//       </a>
//     </footer>
//   );
// };

import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <p className="text-sm text-muted-foreground text-center md:text-left">
        &copy; {new Date().getFullYear()} Mahendra Makwana. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hover:scale-110"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
