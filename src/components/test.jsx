import React from "react";
import "@css/pages/card-statistics.css"
import "@css/pages/vertical-timeline.css"
import "@css/core/menu/menu-types/vertical-menu-modern.css"
import "@css/core/colors/palette-gradient.css"



class Test extends React.Component {
    render() {
      return(
        <div className="horizontal-layout horizontal-menu horizontal-menu-padding content-detached-right-sidebar " data-open="click" data-menu="horizontal-menu" data-col="content-detached-right-sidebar">

          <nav className="header-navbar navbar-expand-md navbar navbar-with-menu undefined navbar-light navbar-border navbar-brand-center">Name
              <div class="navbar-wrapper">
                  <div class="navbar-header">
                      <ul class="nav navbar-nav flex-row">
                          <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="feather icon-menu font-large-1"></i></a></li>
                          <li class="nav-item"><a class="navbar-brand" href="../../../html/ltr/horizontal-menu-template/index.html">
                            <img class="brand-logo" alt="stack admin logo" src="@images/logo/stack-logo.png"/>
                                  <h2 class="brand-text">Stack</h2>
                              </a></li>
                          <li class="nav-item d-md-none"><a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="fa fa-ellipsis-v"></i></a></li>
                      </ul>
                  </div>
                  <div class="navbar-container container center-layout">
                      <div class="collapse navbar-collapse" id="navbar-mobile">
                          <ul class="nav navbar-nav mr-auto float-left">
                              <li class="nav-item d-none d-md-block"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="feather icon-menu"></i></a></li>
                          </ul>
                          <ul class="nav navbar-nav float-right">
                              <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                      <div class="avatar avatar-online"><img src="@images/portrait/small/avatar-s-1.png" alt="avatar"/><i></i></div><span class="user-name">John Doe</span>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#"><i class="feather icon-user"></i> Edit Profile</a><a class="dropdown-item" href="#"><i class="feather icon-mail"></i> My Inbox</a><a class="dropdown-item" href="#"><i class="feather icon-check-square"></i> Task</a><a class="dropdown-item" href="#"><i class="feather icon-message-square"></i> Chats</a>
                                      <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="feather icon-power"></i> Logout</a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
      
      
          <div className="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-light navbar-without-dd-arrow navbar-shadow menu-border" role="navigation" data-menu="menu-wrapper">Name
              <div class="navbar-container main-menu-content container center-layout" data-menu="menu-container">
                  <ul class="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
                      <li class="nav-item"><a class="nav-link" href="../../../html/ltr/horizontal-menu-template/index.html"><i class="feather icon-home"></i><span data-i18n="nav.dash.main">Dashboard</span></a></li>
                      <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="feather icon-zap"></i><span data-i18n="nav.starter_kit.main">Starter kit</span></a>
                          <ul class="dropdown-menu">
                              <li data-menu=""><a class="dropdown-item" href="horizontal-layout-1-column.html" data-i18n="nav.starter_kit.1_column" data-toggle="dropdown">1 column</a>
                              </li>
                              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-i18n="nav.starter_kit.3_columns_detached.main" data-toggle="dropdown">Content Det. Sidebar</a>
                                  <ul class="dropdown-menu">
                                      <li data-menu=""><a class="dropdown-item" href="layout-content-detached-left-sidebar.html" data-i18n="nav.starter_kit.3_columns_detached.3_columns_detached_left_sidebar" data-toggle="dropdown">Detached left sidebar</a>
                                      </li>
                                      <li data-menu=""><a class="dropdown-item" href="layout-content-detached-left-sticky-sidebar.html" data-i18n="nav.starter_kit.3_columns_detached.3_columns_detached_sticky_left_sidebar" data-toggle="dropdown">Detached sticky left sidebar</a>
                                      </li>
                                      <li data-menu=""><a class="dropdown-item" href="layout-content-detached-right-sidebar.html" data-i18n="nav.starter_kit.3_columns_detached.3_columns_detached_right_sidebar" data-toggle="dropdown">Detached right sidebar</a>
                                      </li>
                                      <li class="active" data-menu=""><a class="dropdown-item" href="layout-content-detached-right-sticky-sidebar.html" data-i18n="nav.starter_kit.3_columns_detached.3_columns_detached_sticky_right_sidebar" data-toggle="dropdown">Detached sticky right sidebar</a>
                                      </li>
                                  </ul>
                              </li>
                              <li class="dropdown-divider"></li>
                              <li data-menu=""><a class="dropdown-item" href="layout-fixed-navigation.html" data-i18n="nav.starter_kit.fixed_navigation" data-toggle="dropdown">Fixed navigation</a>
                              </li>
                              <li class="dropdown-divider"></li>
                              <li data-menu=""><a class="dropdown-item" href="layout-fixed.html" data-i18n="nav.starter_kit.fixed_layout" data-toggle="dropdown">Fixed layout</a>
                              </li>
                              <li data-menu=""><a class="dropdown-item" href="layout-boxed.html" data-i18n="nav.starter_kit.boxed_layout" data-toggle="dropdown">Boxed layout</a>
                              </li>
                              <li data-menu=""><a class="dropdown-item" href="layout-static.html" data-i18n="nav.starter_kit.static_layout" data-toggle="dropdown">Static layout</a>
                              </li>
                              <li class="dropdown-divider"></li>
                              <li data-menu=""><a class="dropdown-item" href="layout-light.html" data-i18n="nav.starter_kit.light_layout" data-toggle="dropdown">Light layout</a>
                              </li>
                              <li data-menu=""><a class="dropdown-item" href="layout-dark.html" data-i18n="nav.starter_kit.dark_layout" data-toggle="dropdown">Dark layout</a>
                              </li>
                          </ul>
                      </li>
                      <li class="nav-item"><a class="nav-link" href="https://pixinvent.ticksy.com/"><i class="feather icon-life-buoy"></i><span>Raise Support</span></a></li>
                      <li class="nav-item"><a class="nav-link" href="https://pixinvent.com/stack-bootstrap-admin-template/documentation"><i class="feather icon-folder"></i><span>Documentation</span></a></li>
                  </ul>
              </div>
          </div>
      
          <div className="app-content container center-layout mt-2">Name
            <div class="content-overlay"></div>
            <div class="content-wrapper">
                <div class="content-header row">
                    <div class="content-header-left col-md-6 col-12 mb-2">
                        <h3 class="content-header-title mb-0">Detached Right Sticky Sidebar</h3>
                        <div class="row breadcrumbs-top">
                            <div class="breadcrumb-wrapper col-12">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Starters Kit</a>
                                    </li>
                                    <li class="breadcrumb-item active">Content detached right sticky sidebar
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="content-header-right col-md-6 col-12 mb-md-0 mb-2">
                        <div class="media width-250 float-right">
                            <div class="media-left media-middle">
                                <div id="sp-bar-total-sales"></div>
                            </div>
                            <div class="media-body media-right text-right">
                                <h3 class="m-0">$5,668</h3><span class="text-muted">Sales</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-detached content-left">
                    <div class="content-body">
                        <section class="row">
                            <div class="col-sm-12">
                                <div id="kick-start" class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Kick start your project development !</h4>
                                        <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                                        <div class="heading-elements">
                                            <ul class="list-inline mb-0">
                                                <li><a data-action="collapse"><i class="feather icon-minus"></i></a></li>
                                                <li><a data-action="reload"><i class="feather icon-rotate-cw"></i></a></li>
                                                <li><a data-action="close"><i class="feather icon-x"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-content collapse show">
                                        <div class="card-body">
                                            <div class="card-text">
                                                <p>Getting start with your project custom requirements using a ready template which is quite difficult and time taking process, Stack Admin provides useful features to kick start your project development with no efforts !</p>
                                                <ul>
                                                    <li>Stack Admin provides you getting start pages with different layouts, use the layout as per your custom requirements and just change the branding, menu & content.</li>
                                                    <li>It use template engine to generate pages and whole template quickly using node js. You can generate entire template with your selected custom layout, branding & menu. Save your time for doing the common changes for
                                                        each page (i.e menu, branding and footer) by generating template.</li>
                                                    <li>Every components in Stack Admin are decoupled, it means use use only components you actually need! Remove unnecessary and extra code easily just by excluding the path to specific SCSS, JS file.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div id="what-is" class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">What is starter kit ?</h4>
                                        <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                                        <div class="heading-elements">
                                            <ul class="list-inline mb-0">
                                                <li><a data-action="collapse"><i class="feather icon-minus"></i></a></li>
                                                <li><a data-action="reload"><i class="feather icon-rotate-cw"></i></a></li>
                                                <li><a data-action="close"><i class="feather icon-x"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-content collapse show">
                                        <div class="card-body">
                                            <div class="card-text">
                                                <p>Starter kit is a set of pages with different layouts, useful for your next project to start development process from scratch with no time. </p>
                                                <ul>
                                                    <li>Each layout includes basic components only.</li>
                                                    <li>Select your choice of layout from starter kit, customize it with optional changes like colors and branding, add required dependency only.</li>
                                                    <li>Using template engine to generate whole template quickly with your selected layout and other custom changes.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div id="how-to" class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">How to use starter kit ?</h4>
                                        <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                                        <div class="heading-elements">
                                            <ul class="list-inline mb-0">
                                                <li><a data-action="collapse"><i class="feather icon-minus"></i></a></li>
                                                <li><a data-action="reload"><i class="feather icon-rotate-cw"></i></a></li>
                                                <li><a data-action="close"><i class="feather icon-x"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-content collapse show">
                                        <div class="card-body">
                                            <div class="card-text">
                                                <p><span class="text-bold-600 mt-2">HTML</span></p>
                                                <p>If you know just HTML, select your choice of layout from starter kit folder, customize it with optional changes like colors and branding, add required dependency only.</p>
                                                <div class="alert alert-icon-left alert-arrow-left alert-info mb-2" role="alert">
                                                    <h4>Tip!</h4>
                                                    <p>Hideable navbar option is available for fixed navbar with static navigation only. Works in top and bottom positions, single and multiple navbars.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div id="simple-card" class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Simple Card</h4>
                                        <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                                        <div class="heading-elements">
                                            <ul class="list-inline mb-0">
                                                <li><a data-action="collapse"><i class="feather icon-minus"></i></a></li>
                                                <li><a data-action="reload"><i class="feather icon-rotate-cw"></i></a></li>
                                                <li><a data-action="close"><i class="feather icon-x"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-content collapse show">
                                        <div class="card-body">
                                            <div class="card-text">
                                                <h5>HTML Ipsum Presents</h5>
                                                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                                                    semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean
                                                    fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
                                                <h6>Header Level 2</h6>
    
                                                <ol>
                                                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                                    <li>Aliquam tincidunt mauris eu risus.</li>
                                                </ol>
    
                                                <blockquote>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada
                                                        tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>
                                                </blockquote>
    
                                                <h3>Header Level 3</h3>
    
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                                    <li>Aliquam tincidunt mauris eu risus.</li>
                                                </ul>
                                                <dl>
                                                    <dt>Definition list</dt>
                                                    <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
                                                    <dt>Lorem ipsum dolor sit amet</dt>
                                                    <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
    
                        <section class="row">
                            <div class="col-md-6 col-sm-12">
                                <div id="with-header" class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">With Header</h4>
                                        <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                                        <div class="heading-elements">
                                            <ul class="list-inline mb-0">
                                                <li><a data-action="collapse"><i class="feather icon-minus"></i></a></li>
                                                <li><a data-action="reload"><i class="feather icon-rotate-cw"></i></a></li>
                                                <li><a data-action="close"><i class="feather icon-x"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-content collapse show">
                                        <div class="card-body border-top-blue-grey border-top-lighten-5 ">
                                            <h4 class="card-title">Content title</h4>
                                            <p class="card-text">Add a heading to card with <code>.card-header </code> class &amp; content title uses <code>.card-title</code> class. For border add <code>.border-top-COLOR</code> class</p>
                                            <p class="card-text">You may also include any &lt;h1&gt;-&lt;h6&gt; with a <code>.card-header </code> &amp; <code>.card-title</code> class to add heading.</p>
                                            <p class="card-text">Jelly beans sugar plum cheesecake cookie oat cake soufflé. Tart lollipop carrot cake sugar plum. Marshmallow wafer tiramisu jelly beans.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div id="with-header-border-0" class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">With Header &amp; No Border</h4>
                                        <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                                        <div class="heading-elements">
                                            <ul class="list-inline mb-0">
                                                <li><a data-action="collapse"><i class="feather icon-minus"></i></a></li>
                                                <li><a data-action="reload"><i class="feather icon-rotate-cw"></i></a></li>
                                                <li><a data-action="close"><i class="feather icon-x"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-content collapse show">
                                        <div class="card-body">
                                            <h4 class="card-title">Content title</h4>
                                            <p class="card-text">Add a heading to card with <code>.card-header </code> class &amp; content title uses <code>.card-title</code> class.</p>
                                            <p class="card-text">You may also include any &lt;h1&gt;-&lt;h6&gt; with a <code>.card-header </code> &amp; <code>.card-title</code> class to add heading.</p>
                                            <p class="card-text">Gingerbread brownie sweet roll cheesecake chocolate cake jelly beans marzipan gummies dessert. Jelly beans sugar plum cheesecake cookie oat cake soufflé.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="sidebar-detached sidebar-right sidebar-sticky">
                    <div class="sidebar">
                        <div class="sidebar-content card d-none d-lg-block">
                            <div class="card-body">
                                <div class="category-title pb-1">
                                    <h6>Card example</h6>
                                </div>
                                <div class="text-center">
                                    <img class="card-img-top mb-1 img-fluid" data-src="holder.js/100px180/" src="@images/portfolio/portfolio-1.jpg" alt="Card image cap"/>
                                </div>
                                <h4 class="card-title">Card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                                <hr/>
                                <div class="category-title pb-1">
                                    <h6>Progress example</h6>
                                </div>
                                <div>
                                    <div class="progress progress-sm mt-1 mb-0">
                                        <div class="progress-bar bg-success" role="progressbar" style={{"width": "40%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-sm mt-1 mb-0">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{"width": "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-sm mt-1 mb-0">
                                        <div class="progress-bar bg-info" role="progressbar" style={{"width": "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="category-title pb-1">
                                    <h6>Media example</h6>
                                </div>
                                <div class="media">
                                    <a class="media-left pr-1" href="#">
                                        <img class="media-object" src="@images/portrait/small/avatar-s-3.png" alt="Generic placeholder image" style={{"width": "64px","height": "64px"}} />
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">Cookie candy</h4> Cookie candy dragée marzipan pie pudding.
                                    </div>
                                </div>
                                <hr/>
                                <div class="sidebar-category">
                                    <div class="category-title pb-1">
                                        <h6>Form example</h6>
                                    </div>
                                    <form action="#" class="category-content">
                                        <div class="form-group">
                                            <label>Your name:</label>
                                            <input type="text" class="form-control" placeholder="Username"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Your password:</label>
                                            <input type="password" class="form-control" placeholder="Password"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Your message:</label>
                                            <textarea rows="3" cols="3" class="form-control" placeholder="Default textarea"></textarea>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <button type="reset" class="btn btn-danger btn-block">Reset</button>
                                            </div>
                                            <div class="col-6">
                                                <button type="submit" class="btn btn-info btn-block">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    
        <div className="sidenav-overlay"></div>
        <div className="drag-target"></div>
    </div>);
    }
  }
export default Test;