import React from 'react';

import { Container, Avatar, Info, FollowButton } from './Styles';

interface Props{
    name: string;
    nickname: string
} 

const FollowSugestion: React.FC<Props> = ({
    name, nickname
}) => {
  return (
    <Container>
        <div>
            <Avatar/>
                <Info>
                    <strong>{name}</strong>
                    <span>{nickname}</span>
                </Info>
        </div>
        <FollowButton outlined>Follow</FollowButton>

    </Container>

  );
}

export default FollowSugestion;