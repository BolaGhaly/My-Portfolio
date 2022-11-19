import ReactGA from "react-ga";

const GA_Event = (category: string, action: string, label: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export default GA_Event;