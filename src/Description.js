const POST_YEAR = 2019;

function Description({username}) {
    const yearDiff = new Date().getFullYear() - POST_YEAR;

    return (
        <div className="app-block">
            <span>Hello, {username}!</span>
            <p>
                {yearDiff} years ago I published&nbsp;
                <a href="https://www.linkedin.com/posts/pavel-savinov_goals-for-2019-are-they-in-line-with-your-activity-6483990814627368960-Zum2">this post</a>&nbsp;on
                LinkedIn. There I tried to explain my approach to planning my life in general, and goals setting in particular.
            </p>
            <p>
                Since when I got a bunch of different feedback about the approach and difficulties people faced trying to apply it.
            </p>
            <p>
                Surprisingly, the most difficult part was - to identify your core values, especially for those of us who don't have a lot of time for self-reflection.
            </p>
            <p>
                In this simple app I have a good variety of core values which you could use as a reference point. Just choose the ones which resonate the most with your current state of mind!
            </p>
            <p className="disclaimer">
                This app is 100% free, I don't ask you to pay to get the results or any other bullshit like that. App doesn't store any personal data remotely and doesn't share the results with anyone.
            </p>
        </div>
    );
}

export default Description;
