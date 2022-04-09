const scrollTo = (elem: string) => {
  document.getElementById(elem)?.scrollIntoView({behavior: 'smooth'});
}

export default scrollTo;