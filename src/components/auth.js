import useSWR from 'swr'

export default function Auth({ children }) {
  let isValidated = useSWR('/api/validateAuth', (apiUrl) => fetch(apiUrl, { method: 'POST' }).then(res => {
    // console.log(res.isValidated)
    if (res.redirected) {
      window.location = res.url;
      return res.json()
    } else {
      return res.json()
    }
  })).data
  //console.log(isValidated)

  if (isValidated == null || isValidated == undefined) {
    return <></>
  }

  return (
    <>
      {children}
    </>
  );
}