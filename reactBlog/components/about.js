import React from "react";

const About = function (props) {
    return (
        <div className="container">
            <div className="row">
                <main>
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices
                        purus quis nulla facilisis, non viverra enim placerat. Morbi vel fringilla
                        purus. Integer tempus ex a nulla consectetur faucibus. Suspendisse dignissim
                        ligula a lacus fringilla malesuada. Phasellus non dapibus risus, commodo sodales
                        erat. Phasellus tristique consequat felis id ultricies. Orci varius natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vulputate
                        velit in enim pellentesque blandit. Pellentesque at porttitor nisi. Sed
                        pellentesque, dui at pellentesque semper, dui urna pulvinar felis, at pulvinar
                        ante metus sit amet ipsum.</p>
                    <img src="../img/sample-1.jpg" alt="" className="z-depth-5" />
                    <p>Quisque aliquam est diam, sed luctus ante venenatis et. Vestibulum at porta
                        tellus, ac pulvinar nunc. Vivamus eget scelerisque arcu. Morbi tincidunt sapien
                        at est gravida, vitae auctor lectus varius. Donec porttitor eget est ut tempus.
                        Etiam sed justo quis ligula faucibus condimentum. Donec maximus elit at felis
                        luctus, ut euismod nisi mollis. In sed diam nisl. Morbi sagittis, nibh bibendum
                        pellentesque sodales, dolor est placerat nibh, maximus lobortis est ipsum vel
                        ante. Duis quis nisl odio. Integer ut ex eget enim ullamcorper accumsan. Donec
                        sed ullamcorper ex, sit amet scelerisque erat. Aliquam at justo nulla. Morbi
                        scelerisque laoreet molestie. Aenean vitae faucibus est, ac dictum erat.</p>
                </main>
            </div>
        </div>
    );
};

export default About;