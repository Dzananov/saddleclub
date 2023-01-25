import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router";
import { Button, Image } from "react-bootstrap";
import Profile from "./Profile";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";


function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState( {} );
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === profile?.owner;
  const [hasLoaded, setHasLoaded] = useState (false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: profile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}`),
          
        ]);
        setProfile(profile);
        setHasLoaded(true);
        console.log(profile);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, setProfile]);

  const mainProfile = (
    <>
      <container className={appStyles.Content}>
       <Row className="px-3 text-center">

        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
          </Row>
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
       </Row>
      </container>
      
    
    </>
  );
  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

   return (
     <Row>
       <Col className="py-2 p-0 p-lg-2" lg={8}>
         <PopularProfiles mobile />
         <Container className={appStyles.Content}>
           {hasLoaded ? (
             <>
               {mainProfile}
               {mainProfilePosts}
             </>
           ) : (
             <Asset spinner />
           )}
         </Container>
       </Col>
       <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
         <PopularProfiles />
       </Col>
     </Row>
   );
}

export default ProfilePage;