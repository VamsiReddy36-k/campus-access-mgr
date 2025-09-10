import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Shield, BookOpen, Calendar, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary rounded-full p-2">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">EduManage</h1>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-primary to-primary-glow">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="bg-primary/10 rounded-full p-4 w-20 h-20 mx-auto mb-6">
              <GraduationCap className="h-12 w-12 text-primary mx-auto" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Modern Student
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {" "}Management
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamline your educational administration with our comprehensive 
              student management system. Built for modern institutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-lg px-8 py-3"
              >
                Start Free Trial
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3"
              >
                Demo Login
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary mx-auto" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Student Management</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive student profiles with enrollment tracking and course management
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary mx-auto" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Role-Based Access</h3>
                <p className="text-muted-foreground text-sm">
                  Secure authentication with admin and student role separation
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary mx-auto" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Course Tracking</h3>
                <p className="text-muted-foreground text-sm">
                  Monitor student progress and manage course enrollments efficiently
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything you need to manage students
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From enrollment to graduation, our platform provides all the tools 
              you need for effective student administration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-success/10 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Admin Dashboard</h3>
                  <p className="text-muted-foreground">
                    Complete overview of all students with powerful management tools
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-success/10 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Student Profiles</h3>
                  <p className="text-muted-foreground">
                    Individual student dashboards for profile management and progress tracking
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-success/10 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Secure Authentication</h3>
                  <p className="text-muted-foreground">
                    JWT-based authentication with role-based access control
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-success/10 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Real-time Updates</h3>
                  <p className="text-muted-foreground">
                    Instant synchronization across all user interfaces
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl p-8">
              <div className="bg-card rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary rounded-full p-2">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">Dashboard Preview</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Students</span>
                    <span className="font-semibold text-primary">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Courses</span>
                    <span className="font-semibold text-success">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">This Month</span>
                    <span className="font-semibold text-info">89</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 mt-4">
                    <div className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-xs text-muted-foreground">System Performance: 75%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to modernize your student management?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of educational institutions already using EduManage
          </p>
          <Link to="/signup">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-lg px-8 py-3"
            >
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-primary rounded-full p-2">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">EduManage</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 EduManage. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;