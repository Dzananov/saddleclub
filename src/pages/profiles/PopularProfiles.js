import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const PopularProfiles = ( {mobile} ) => {
    const [profileData, setProfileData] = useState({
      pageProfile: { results: [] },
      popularProfiles: { results: [] },
    });
    const { popularProfiles } = profileData;
    const currentUser = useCurrentUser();
  
    useEffect(() => {
      const handleMount = async () => {
        try {
          const { data } = await axiosReq.get(
            "/profiles/?ordering=-created_at"
          );
          setProfileData((prevState) => ({
            ...prevState,
            popularProfiles: data,
          }));
        } catch (err) {
          console.log(err);
        }
      };
  
      handleMount();
    }, [currentUser]);
  //Showings of the most popular profiles mobile vs. desktop. Showing 6 on mobile
  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles.results.length ? (
        <>
          <p>Newest members</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 3).map((profile) => (
                <p key={profile.id}>{profile.owner}</p>
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <p key={profile.id}>{profile.owner}</p>
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;