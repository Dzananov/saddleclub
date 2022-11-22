import { axiosReq } from "../api/axiosDefaults";
//Showing new posts on the page as user scrolls but filtering so newer posts will show but the old posts that
//user has already seen will not show again. So when user updates page new posts will uplode on the top of page
//and old ones will show belowe. Post that are created/updated meantime will show if updated
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};