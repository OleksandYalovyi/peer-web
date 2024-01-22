export default {
  container: (provided) => ({
    ...provided,
    width: '100%',
    zIndex: 10,
  }),
  menu: (provided) => ({
    ...provided,
    color: '#fff',
    'background-color': '#222',
    'border-radius': 12,
    padding: '8px 10px',
    cursor: 'pointer',
  }),
  option: (provided, state) => ({
    ...provided,
    'border-radius': 8,
    'background-color': state.isFocused ? '#4C4C4C' : '#333',
    padding: '7px 5px',

    cursor: 'pointer',
  }),
  control: (provided) => ({
    ...provided,
    'border-radius': '12px',
    'background-color': '#222',
    border: 'none',
    'box-shadow': 'none',
    'font-size': '16px',
    '&:hover': {
      border: 'none',
      'box-shadow': 'none',
    },
    padding: '10px 12px',
    cursor: 'pointer',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  multiValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    padding: 0,
    'background-color': '#222',
    'font-family': 'IBM Plex Mono, monospace',
    'font-size': '14px',
    'text-transform': 'uppercase',
    'font-style': 'normal',
    'font-weight': '600',
    'line-height': '20px',
  }),
}
