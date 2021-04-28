const separo = (str, sep=' ', { attachSep=false, keepSep=false } = { attachSep: false, keepSep: false }) => {
  if (typeof sep === 'string') sep = new Set([sep]);
  else if (Array.isArray(sep)) sep = new Set(sep);

  const result = [];
  let current = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (sep.has(char)) {
      result.push(current);
      if (attachSep) {
        current = char;
      } else if (keepSep) {
        result.push(char);
        current = '';
      } else {
        current = '';
      }
    } else {
      current += char;
    }
  }
  if (current.length > 0) result.push(current);

  return result;
};

if (typeof module === 'object') module.exports = separo;
if (typeof window === 'object') window.separo = separo;
if (typeof self === 'object') self.separo = separo;
