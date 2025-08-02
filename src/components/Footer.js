import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark-500 text-white text-sm h-[128px] mt-8">
            <div className="flex gap-20 max-w-[1280px] mx-auto items-center h-full">
                <p>会員登録</p>
                <p>運営会社</p>
                <p>利用規約</p>
                <p>個人情報の取扱について</p>
                <p>特定商取引法に基づく表記</p>
                <p>お問い合わせ</p>
            </div>
        </footer>
    );
};

export default Footer;
