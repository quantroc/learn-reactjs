import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nghe là ghiền',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/5/7/a/a57a187a2ad52609b9970052a6f1cc4f.jpg',
        },
        {
            id: 2,
            name: 'US-UK 2022',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/b/5/7/fb575e434d900e880a1d5ed93822bcd9.jpg',
        },
        {
            id: 3,
            name: 'Rock Chicks',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/b/a/8/0ba8a59f4eb4fc69be0977ea9cacd4e8.jpg',
        },
    ];

    return (
        <div>
            <h2>Nhạc Music</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;